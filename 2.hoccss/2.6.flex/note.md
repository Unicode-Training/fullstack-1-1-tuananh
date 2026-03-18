# Flexbox

## Các thuộc tính flex container

- display: flex --> Kích hoạt flexbox
- flex-direction: Chọn hướng cho trục main

* row: Ngang
* column: Dọc
* row-reverse: Ngang, đảo ngược
* column-reverse: Dọc, đảo ngược

- justify-content: Căn chỉnh item theo hướng song song với trục main

* flex-start
* center
* flex-end
* space-around
* space-between
* space-evenly

- align-items: Căn chỉnh item theo hướng song song với trục cross

* stretch
* flex-start
* center
* flex-end

- flex-wrap: wrap các phần tử khi vượt quá kích thước của container

- gap: Chỉnh khoảng cách giữa các item

* wrap
* nowrap
* wrap-reverse

## Các thuộc tính flex item

- flex-grow: number ==> Lấp đầy vị trí còn trống của container bằng cách tăng kích thước của item
- flex-shrink: number ==> Cho phép co item hay không khi vượt quá kích thước của container
- order: Sắp xếp các item
