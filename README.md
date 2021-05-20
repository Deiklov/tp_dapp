## React+ipfs+brownie
Simple project for dapp  
Структура на основе create-react-app  
## Инструкция по запуску
1. CORS конфиг ipfs config --json Gateway.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST", "OPTIONS"]'
2. CORS конфиг ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
3. Запуск ipfs daemon --writable
4. cd tp_dapp && yarn install && yarn start
5. cd tp_dapp/brownie && brownie console && ctrct=HashStorage.deploy({'from':accounts[2]})
6. запомнить хеш задеплоенного аккаунта и вписать в .env.development
7. Ставим Metamask, заходим на localhost:3000
## Инструкция по работе  
1. жмем выберите файл
2. выбираем png картинку
3. жмем Сохранить в блокчейн
4. в Metamask подтверждаем транзакцию
5. жмем Получить картинку
6. Смотрим на картинку

**Запуск тестов через brownie test из папки brownie**

[YouTube link](https://youtu.be/_TnmdM9hMTU)
