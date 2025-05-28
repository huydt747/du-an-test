frontend:

npm install

backend:

npm install express cors

chạy docker

docker images FE:

docker build -t xhieu123/du-an-test-fe .

docker run -p 3000:3000 xhieu123/du-an-test-fe

docker images BE:

docker build -t xhieu123/du-an-test-be .

docker run -p 4000:4000 --add-host=host.docker.internal:host-gateway xhieu123/du-an-test-be