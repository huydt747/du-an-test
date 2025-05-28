FROM node:lts

WORKDIR /usr/src/app

# Copy package.json và package-lock.json
COPY package*.json ./

# Tắt tải Chromium nếu bạn sử dụng Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Cài đặt các dependencies
RUN npm install

# Copy mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Chạy build ứng dụng (nếu cần)
RUN npm run build

# Mở port 3000
EXPOSE 3000

# Chạy ứng dụng khi container bắt đầu
CMD ["npm", "run", "dev"]


