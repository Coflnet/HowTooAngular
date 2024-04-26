VERSION=0.4.0

docker run --rm -v "${PWD}:/local" --network host -u $(id -u ${USER}):$(id -g ${USER})  openapitools/openapi-generator-cli generate \
-i https://how-too.coflnet.com/api/openapi.json \
-g typescript-angular \
-o /local/src/app/client