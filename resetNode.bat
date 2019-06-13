FOR /F "tokens=*" %%G IN ('DIR /B /AD /S .bin') DO RMDIR /S /Q "%%G"
npm install
npm audit fix
npm install formsy-react 1.1.1
npm install -g yarn

