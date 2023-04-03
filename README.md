## Install the project by Docker

First install docker then run this command

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

## Install NPM

```
./vendor/bin/sail npm install
```

Other commands
```
./vendor/bin/sail npm run dev
./vendor/bin/sail npx run
```

## Run this project 

```
./vendor/bin/sail up
```