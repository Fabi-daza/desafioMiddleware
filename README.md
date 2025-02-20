# Desafío: Implementación de un Middleware en Node.js

Este proyecto implementa un sistema de mensajería basado en **middlewares** utilizando **Node.js** y **Express**.

## 🚀 Tecnologías utilizadas
- **Node.js**
- **Express.js**
- **Morgan** 
- **Cookie-Parser**

---

## 📌 Configuración inicial

### 1️⃣ **Clonar el repositorio**  
Clona este repositorio en tu máquina local:
```sh
git clone https://github.com/Fabi-daza/desafioMiddleware.git
```

### 2️⃣ **Instalar las dependencias**  
Ejecuta el siguiente comando para instalar las dependencias necesarias:
```sh
npm install
```

### 3️⃣ **Levantar el proyecto**  
Para iniciar el servidor en modo desarrollo, usa:
```sh
npm run dev
```
---

## 🔥 Rutas de prueba
Puedes probar las siguientes rutas en **Postman** o **ThunderClient**:

### **📩 Enviar un mensaje** (`POST`)
**URL:**
```
http://localhost:3000/messages/send
```

**Body (JSON):**  
```json
{
  "user": "usuario",
  "content": "tu mensaje"
}
```

### **📥 Obtener mensajes** (`GET`)
**URL:**
```
http://localhost:3000/messages/receive
```

## 📝 Notas adicionales
- Asegúrate de que el **servidor esté corriendo** antes de probar las rutas.
- Revisa la consola para ver los logs generados por `morgan`. 



