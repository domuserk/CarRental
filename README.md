first step make download docker and docker-compose

second step run
`docker build -t rentx .`
 
third step run 
`docker-compose up`

for connect a database 
`
 POSTGRES_USER=docker
 POSTGRES_PASSWORD=ignite
 POSTGRES_DB=rentx
`