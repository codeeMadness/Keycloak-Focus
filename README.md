<h1>Keycloak là gì?</h1>
Keycloak là công cụ cho phép đăng nhập 1 lần để quản lý danh tính và quản lý truy cập cho các ứng dụng và dịch vụ hiện đại, viết bằng Java và hỗ trợ các giao thức liên kết danh tính theo mặc định SAML v2 và OpenID Connect (OIDC)/OAuth2.

<h1>Kiến trúc hệ thống</h1>

1. **Ứng dụng di động React Native**
2. **API Gateway của AWS**
3. **AWS Lambda Functions**
4. **Keycloak (xác thực và quản lý quyền)**
5. **Các dịch vụ khác (OpenMRS, Rocket.Chat, Odoo)**

<h1>Giới thiệu về mô hình phát triển</h1>
Có rất nhiều các mô hình để làm việc với Keycloak. Tuy nhiên vì tính chất bảo mật, chúng tôi chọn xây dựng Keycloak thông qua mô hình như sau:

![image](https://github.com/user-attachments/assets/cff78c53-e858-46fe-aad8-fd29cb2d119d)

### Quy trình Đăng ký Người dùng 
1. **Người dùng mở ứng dụng di động và nhấn vào nút "Đăng ký"**: 
- Người dùng điền thông tin đăng ký như tên người dùng, mật khẩu, email. 
2. **Gửi yêu cầu đăng ký tới API Gateway**: 
- Ứng dụng di động gửi thông tin đăng ký tới một endpoint đăng ký của API Gateway. 
3. **API Gateway chuyển tiếp yêu cầu tới Lambda Function**: 
- API Gateway nhận yêu cầu đăng ký và chuyển tiếp tới một Lambda function chuyên xử lý đăng ký người dùng. 
4. **Lambda Function gọi API Keycloak để tạo người dùng**: 
- Lambda function sử dụng API của Keycloak để tạo người dùng mới trong hệ thống Keycloak với các thông tin đã được gửi. 
5. **Phản hồi từ Keycloak**: 
- Keycloak gửi phản hồi lại cho Lambda function, cho biết việc tạo người dùng thành công hay thất bại. 
6. **Lambda Function gửi phản hồi qua API Gateway**: 
- Lambda function gửi phản hồi về trạng thái đăng ký lại cho API Gateway. 
7. **API Gateway gửi phản hồi tới ứng dụng di động**: 
- API Gateway gửi phản hồi về trạng thái đăng ký (thành công hay thất bại) tới ứng dụng di động. 
8. **Hiển thị kết quả cho người dùng**: 
- Ứng dụng di động hiển thị thông báo cho người dùng về kết quả đăng ký

<h1>Cách configure trên Keycloak</h1>

### Best Practice: 

**Bước 1:** Hãy tạo mới một Realm và tạo nhiều clients (tương ứng có bao nhiêu applications cần kết nối với Keycloak).
Về cách tạo Realm và client trong Realm có thể tham khảo nhiều nguồn tư liệu trên mạng.

**Bước 2:** Cài đặt một client trên Realm như sau: 

![image](https://github.com/user-attachments/assets/ded0f502-5c3d-4df3-909a-c962d609d9fe)

**Bước 3:** Trao quyền **manage-users** cho client 

![image](https://github.com/user-attachments/assets/04a395c1-1ed9-47e1-a1c8-8807138899d8)

## Các bước này là quan trọng để client có quyền đăng ký User vào trong Realm

<h1>Thông tin về các Rest API</h1>

File import để testing trên Postman: 

**Login Client:**

**Endpoint:** https://5y6hrjzgsh.execute-api.ap-southeast-1.amazonaws.com/dev/login

**Body:** {
      	"client_id": <yourclientid>,
  	"client_secret": <yourclientsecret>,
  	"grant_type": "client_credentials"
}
 
**Return:** 200 {Client-Access Token}

**Register User:**

**Endpoint:** https://5y6hrjzgsh.execute-api.ap-southeast-1.amazonaws.com/dev/register

**Body:** {
  "username": <username>,
  "email": <email>,
  "firstName": <First Name>,
  "lastName": <Last Name>,
  "password": <password>,
  "client_access_token": <Client-Access Token> (from Login Client)
}
 
**Return:** 200 {"User created"}

**Login User:**

**Endpoint:** https://5y6hrjzgsh.execute-api.ap-southeast-1.amazonaws.com/dev/login

**Body:** {
       "grant_type": "password",
       "client_id": <yourclientid>,
       "client_secret": <yourclientsecret>,
       "username": <username>,
       "password": <password>
}

**Return:** 200 {Access Token}
