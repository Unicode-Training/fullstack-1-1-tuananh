# Box model

## Border

border = width + style + color

- border-width: giatri + donvi
- border-style: none | solid | dashed | dotted | double
- border-color: giatrimau

- border-{side}-width
- border-{side}-style
- border-{side}-color

side: top, left, right, bottom

Thuộc tính gộp

- border: width style color
- border-{side}: width style color

## Padding

- Không có giá trị âm
- Không có giá trị auto

Thuộc tính

- padding-top
- padding-left
- padding-right
- padding-bottom

Lưu ý:

- Nếu dùng đơn vị %, padding tỷ lệ theo width của thẻ cha
- padding-top, padding-bottom chỉ hoạt động với thẻ block

Cần phải chuyển thành block (display: block, display:inline-block)

## margin

- Nếu dùng đơn vị %, padding tỷ lệ theo width của thẻ cha
- margin-top, margin-bottom chỉ hoạt động với thẻ block

Giá trị auto chỉ khả dụng với thẻ block

## box-sizing

- Quyết định kích thước box theo content hay border
- box-sizing: content-box (Mặc định) => width mới = width content + padding + border

## width, height

- Chỉ áp dụng với thẻ block
- Đơn vị:

* %: Tỷ lệ theo kích thước của thẻ cha
* vw: Tỷ lệ theo chiều rộng viewport
* vh: Tỷ lệ theo chiều cao viewport

Thuộc tính:

- min-width
- max-width
- min-height
- max-height

## border-radius

- Tạo bo góc cho phần tử html
- Nếu dùng đơn vị %

* Hình vuông, border-radius >= 50% --> Hình tròn

- Để tạo hiệu ứng ôm 2 bên ==> Đặt border-radius có giá trị >= chiều cao
