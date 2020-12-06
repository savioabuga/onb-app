##  App

A project created as part of the onb job interview progress.

This is a SPA app build using React JS as the frontend and a django backend to build a location app.

## Technologies used

1. ReactJS - made use of [Create React App](https://facebook.github.io/create-react-app/) to initialize the client.

2. Django, GeoDjango and [DRF](https://www.django-rest-framework.org/) for the backend

3. Postgres with postgis for the database

4. Docker and docker-compose for containerization od the app

5. Kepler.gl for the Map

## Hosted app
You can view the hosted app here: https://savioabuga.github.io/onb-app/

## Usage

To start the application:

* Unzip or git clone it and change directory to the `onb-app` directory.

* The run the following command.

```bash
    docker-compose up -d --build

```

* After the application has finished installing all requirements and started running, you can access it on your browser [http://localhost:3007/](http://localhost:3007/)

## Troubleshooting

You can check any issues by following the logs with the following command:

```bash
docker-compose logs -f --tail=50
```

## TODO

- [ ] Add Gunicorn and Nginx to the application to serve backend and client.

- [ ] Generating new credentials and moving them from the repo. Using something like [envkey](https://www.envkey.com/) to store credentials.

- [ ] Adding docker and docker-compose files for various environment.

- [ ] Introducing CI/CD.

## License
[MIT](https://choosealicense.com/licenses/mit/)
