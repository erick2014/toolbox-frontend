# Steps to run the app ( without a container)

1. npm install
2. npm run start

# Steps to run the app ( using a docker container)

1. docker build -t toolbox-front .
2. docker run -v /absolutepath-to-your-frontend-repo-here/toolbox-front:/app -p 3001:3001 toolbox-front
3. docker logs -f paste-your-container-id-here
