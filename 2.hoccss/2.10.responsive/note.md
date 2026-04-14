# Responsive

- Adaptive: Dựa theo thiết bị
- Responsive: Dựa theo kích thước màn hình (Khoảng kích thước)

## Meta viewport

Bắt buộc phải có

## Breakpoint

- Điểm kích thước màn hình mà tại đó giao diện sẽ thay đổi
- Không có breakpoint cho mọi dự án

Các breakpoint phổ biến

- 576px
- 768px --> `*`
- 992px --> `*`
- 1200px
- 1400px

## Media Queries

1. Desktop first

```css
@media screen and (max-width: 1399.98px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (max-width: 1199.98px) {
  selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 991.98px) {
  selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 767.98px) {
  selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 575.98px) {
  selector {
    thuoctinh: giatri;
  }
}
```

2. Mobile first

```css
@media screen and (min-width: 576px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 768px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 992px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 1200px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 1400px) {
  selector {
    thuoctinh: giatri;
  }
}
```
