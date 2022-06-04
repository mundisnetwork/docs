#!/bin/bash

npm run build
aws s3 rm s3://docs.mundis.io --recursive
aws s3 cp build/ s3://docs.mundis.io --recursive
aws cloudfront create-invalidation --distribution-id E1ZUYFJZ3JZC8N --paths "/*"
exit 0
