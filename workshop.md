
# Download VS Code 
1. Download VS Code from https://code.visualstudio.com/
2. Install App Service Extension from https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice


# Download the app
1. Download or clone app from https://github.com/krishnaji/mariohtml5
2. Open the directory in VS Code

# Run it locally
1. `npm install`
2. `npm start`

# Create an Azure App Service plan

az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku FREE

# Create a web app

az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name <app_name> --runtime "NODE|6.9"

Visit the site http://<app name>.azurewebsites.net

# Deploy the app 
Use Azure App Service Extesion VS Code extension to deploy the app.
1. Select Azure App Service 
2. Select your Subscription 
3. Select your < app name >
4. Click Deploy to Web App Button.
5. Monitor Output tab for the message >>>>>> Deployment to "<app name>" completed: https://<app name>.azurewebsites.net <<<<<< 
6. Visit the site  https://<app name>.azurewebsites.net and play the game.

