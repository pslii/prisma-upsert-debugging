# Getting started

1. Install rush `npm install -g @microsoft/rush`
2. Copy the .env file `cp .env.template .env`
3. Start docker, then start the MySQL docker container `rushx devdb-start`
4. Populate the DB `rushx prisma migrate dev`
5. Run the script `rushx run`
