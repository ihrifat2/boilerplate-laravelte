## Install the Backend project by Docker

First install & open docker then run this command

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

# OR

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    composer install --ignore-platform-reqs
```

## Run this project 

```
./vendor/bin/sail up
```

## Install the Frontend project by Docker

First install & open docker then run this command

```
docker build . -t trigyte-sveltekit
```

## Run this project 

```
docker run -d -p 3000:3000 trigyte-sveltekit
```