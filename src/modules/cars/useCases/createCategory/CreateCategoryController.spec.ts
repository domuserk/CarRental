import createConnection from '@shared/infra/typeorm';
import { Connection } from 'typeorm';
import request from 'supertest'
import { hash } from 'bcrypt';

import { app } from '@shared/infra/http/app'
import { v4 as uuidV4 } from 'uuid'

let connection: Connection;

describe('Create Category Controller', () => {

  beforeAll(async () => {
    connection = await createConnection()
    await connection.runMigrations()

    const password = await hash('admin', 8)
    const id = uuidV4()

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, is_admin, created_at, driver_license)
       values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXX-XXX')
      `
    )
  })

  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('should be able to create a new category', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@rentx.com.br',
      password: 'admin'
    })

    const { token } = responseToken.body

    const response =  await request(app).post('/categories').send({
      name: "Category Supertest",
      description: "Category Supertest"
    }).set({
      Authorization: `Bearer ${token}`
    })

    expect(response.status).toBe(201)
  })
  
  it('should not be able to create a new category with name exists', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@rentx.com.br',
      password: 'admin'
    })

    const { token } = responseToken.body

    const response =  await request(app).post('/categories').send({
      name: "Category Supertest",
      description: "Category Supertest"
    }).set({
      Authorization: `Bearer ${token}`
    })

    expect(response.status).toBe(400)
  })
})