# 1. ESPECIFICAR LA IMAGEN BASE (Node.js)
# Usamos una imagen ligera de Node.js
FROM node:20-slim

# 2. DEFINIR EL DIRECTORIO DE TRABAJO
# Todas las siguientes instrucciones se ejecutarán dentro de esta carpeta
WORKDIR /usr/src/app

# 3. COPIAR ARCHIVOS DE CONFIGURACIÓN Y DEPENDENCIAS
# Copia package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# 4. INSTALAR DEPENDENCIAS
# Instala las dependencias de Node.js
RUN npm install

# 5. COPIAR EL CÓDIGO FUENTE
# Copia el resto de los archivos de la aplicación al contenedor
# Ignorará lo que esté en .dockerignore (debes crearlo)
COPY . .

# 6. EXPONER EL PUERTO
# El puerto que tu aplicación Express escucha (ej. 3000 o 8080)
EXPOSE 3000

# 7. DEFINIR EL COMANDO DE INICIO
# Comando para ejecutar la aplicación
CMD [ "npm", "run", "dev" ]