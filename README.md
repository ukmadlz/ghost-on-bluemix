# ghost-on-bluemix

[![Deploy to Bluemix](https://deployment-tracker.mybluemix.net/stats/368b15aeafc9433e9ee0ee8448b69bfd/button.svg)](https://bluemix.net/deploy?repository=https://github.com/ukmadlz/ghost-on-bluemix)

## Create Compose for MySQL service
`cf create-service compose-for-mysql Standard GhostDatabase`

## Disabling Deployment Tracking

For manual deploys, deployment tracking can be disabled by removing require("cf-deployment-tracker-client").track(); from the end of the app.js main server file.

## License

Copyright 2017 IBM Watson Data Platform

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
