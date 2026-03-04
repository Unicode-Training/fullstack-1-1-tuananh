# HTML

2 nhóm thẻ

- Nhóm thẻ block

* Luôn nằm ở 1 hàng mới
* Chiều rộng mặc định = 100% so với chiều rộng thẻ cha

- Nhóm thẻ inline

* Chiều rộng mặc định = nội dung của thẻ
* Các thẻ đứng cạnh nhau => nằm trên 1 hàng
* Không thay đổi được width, height

## Các thẻ html trong nhóm block

1. Thẻ heading

Tác dụng: Thể hiện các tiêu đề cần được nhấn mạnh trên trang web

```html
<h1>Nội dung tiêu đề</h1>
<h2>Nội dung tiêu đề</h2>
<h3>Nội dung tiêu đề</h3>
<h4>Nội dung tiêu đề</h4>
<h5>Nội dung tiêu đề</h5>
<h6>Nội dung tiêu đề</h6>
```

Lưu ý: Trên 1 trang web chỉ có 1 thẻ H1
h2, h3, h4... tùy theo phân cấp nội dung

Viết html chuẩn, đúng mục đích -> Semantic

2. Thẻ đoạn văn

Tác dụng: Thể hiện đoạn văn bản (Chỉ chứa văn bản)

```html
<p>Đoạn văn 1</p>
<p>Đoạn văn 2</p>
<p>Đoạn văn 3</p>
```

Lưu ý: Được phép dùng thẻ <br/> để xuống dòng văn bản trong thẻ p

3. Thẻ danh sách

```html
<ul>
  <li>Mục 1</li>
  <li>Mục 2</li>
  <li>Mục 3</li>
  <li>Mục 4</li>
</ul>
```

```html
<ol>
  <li>Mục 1</li>
  <li>Mục 2</li>
  <li>Mục 3</li>
  <li>Mục 4</li>
</ol>
```

4. Thẻ phân chia khu vực (div)

- Thẻ này là thẻ non-semantic
- Tác dụng: Nhóm các thẻ khác để chia bố cục trang web
- Không thay đổi định dạng, trừ phi có sự can thiệp của CSS

5. Thẻ trích dẫn (blockquote)

Trích dẫn nội dung từ trang web khác hoặc câu nói của người nổi tiếng

## Các thẻ trong nhóm inline

1. Thẻ liên kết (a = anchor)

```html
<a href="dia-chi-trang-web">Nội dung hiển thị</a>
```

target: Mục tiêu khi mở liên kết

- `_self`: mở tab hiện tại
- `_blank`: mở tab mới

title: Tiêu đề khi trỏ chuột

2. Thẻ chèn hình ảnh

```html
<img
  src="dia-chi-anh"
  width="chieu-rong"
  heigth="chieu-cao"
  title="tieude"
  alt="van ban thay the"
/>
```

3. Thẻ định dạng văn bản

```html
<b>Nội dung</b>
<i>Nội dung</i>
<u>Nội dung</u>
<s>Nội dung</s>
```

4. Thẻ định dạng kiểu (span)

- Thẻ non-semantic
- Đảm bảo tính inline của 1 thẻ html

5. Thẻ công thức toán học, hóa học

- sub: Dưới
- sup: Trên

6. Bảng

7. Form

- Dùng để gửi dữ liệu lên server
- Cấu tạo form:

* Danh sách các trường
* Nút gửi (submit)

Lưu ý: Các form phải ngang hàng với nhau (Không được lồng)

Nhóm 1:

- Các trường nhập liệu 1 dòng

* text: Nhập bất kỳ nội dung nào
* email: Kiểm tra định dạng email
* password: Mã hóa nội dung thành dấu chấm
* number: Chỉ nhập số

- Chọn file

- Hộp chọn:

* checkbox: Chọn nhiều
* radio: Chỉ chọn 1 trong cùng 1 nhóm
