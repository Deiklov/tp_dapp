## React+ipfs+brownie
Simple project for dapp  
Структура на основе create-react-app  
## Инструкция по запуску
1. docker-compose up -d(поднимется фронт, ipfs, brownie)
2. docker exec ipfs_host ipfs config --json Gateway.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST", "OPTIONS"]'
3. docker exec ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
4. docker exec -it brownie_container sh
5. ctrct=HashStorage.deploy({'from':accounts[2]}); запомнить хеш задеплоенного контракта, вписать в .env.development

6. Ставим Metamask, заходим на localhost:3000, грузим png картинку
