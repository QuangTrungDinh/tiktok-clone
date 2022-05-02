/**
 * UI
 * - margin số âm sẽ làm giảm kích thước padding của phần tử bao ngoài (vd: search button)
 * - overflow: hidden; : làm cho phần tử bên trong dù kích thước lớn hơn phần tử bao ngoài nhưng sẽ bị che đi (vd: search button)
 * - background-color: transparent; : làm background trong suốt và màu background sẽ là màu phần tử bên dưới. (vd: search input)
 * - font-size ảnh hưởng tới kích thước phần tử svg -> set font-size về 0px; (vd: search button)
 * - dùng thẻ span với set width, height và màu để làm gạch ngăn cách.
 * - cách xem css của ::place-holder trên devtool: https://stackoverflow.com/questions/26852922/inspect-webkit-input-placeholder-with-developer-tools
 * - Khi position: fixed; thì div không còn kích thước 100% nữa mà sẽ là kích thước của phần tử bên trong. Do đó cần thêm thuộc tính width: 100%;
 * vào nếu cần. (vd: nav-bar)
 * - position: fixed: element được position theo window
 * - Muốn cho  phần tử postition: fixed được fixed theo layout hiện tại, hãy tạo 1 div bên trong với width và height bằng với div layout bên ngoài,
 * sau đó position fixed sẽ làm cho phần tử nằm đúng vị ví với phần tử bên ngoài nhưng fixed theo window. (vd: left-menu)
 * - Để tạo thanh trược dọc cho overflow, sử dụng: overflow-y: scroll; (vd: left-menu), để vẫn có thể trượt nhưng ẩn thanh trượt dọc,
 * sử dụng overflow:scroll; ::-webkit-scrollbar{display: none}
 * - -webkit, -moz, -ms là gì ? https://stackoverflow.com/questions/18083056/what-are-moz-and-webkit?answertab=votes#tab-top 
 * https://daynhauhoc.com/t/thac-mac-ve-tien-to-moz-webkit-trong-thiet-ke-web/40501
 * - Khi viết chữ thì nên dùng line-height và nếu có lệch thì căn chỉnh bằng transform: translate();
 * - Margin số âm làm kích thước div bên ngoài nhỏ hơn div bên trong.
 * - Handler event mouse leave with some delay: sử dụng kết hợp setTimeout, nhưng khi sử dụng setTimeout thì một lúc sau state
 * mới đươc update cho nên state này có thể update sau 1 lệnh update state sau đó (ví dụ hover 2 lần thì lần hover thứ 2 vừa đổi state
 * xong thì lại bị hàm trong setTimeout đổi lại vì bị delay) => sử dụng clearTimeout để giải quyết.
 * - Restric line break for text (ngăn chặn text xuống dòng khi gặp khoảng trắng): sử dụng white-space: nowrap; (vd: upload video hover-div)
 * https://stackoverflow.com/questions/10647622/css-way-to-restrict-line-break-for-text
 * https://www.digitalocean.com/community/tutorials/css-prevent-line-break
 * Trường hợp text tự xuóng dòng khi gặp khoảng trắng xảy ra khi div bên trong không set width (có display: inline-block) div bên ngoài 
 * set width nhỏ hơn kích thước 1 chữ không khoảng trắng bên trong div trong thì div bên trong sẽ sẽ tự động xuống dòng khi có khoảng trắng
 * và có chiều rộng bằng 1 chữ dài nhất (còn nếu div bên trong cũng set width thì div bên trong vẫn sẽ hiển thị với chiều rộng hơn div bên ngoài trừ khi
 * set overflow: hidden). Còn nếu div bên trong là kiểu display: block; thì div này sẽ có chiều rộng luôn bằng div bên ngoài, dù cho text có 
 * over flow ra thì chiều rộng div này cũng không rộng ra theo chữ dài nhất.
 * - Áp dụng top, left,... và transform: translate ; để căn giữa div position: absolute; : left: 50%; transform: translateX(-50%)
 * https://stackoverflow.com/questions/25982135/why-does-left-50-transform-translatex-50-horizontally-center-an-element
 * - autoplay trong <video>: chỉ hoạt động khi có thuộc tính muted. 
 * https://stackoverflow.com/questions/49930680/how-to-handle-uncaught-in-promise-domexception-play-failed-because-the-use
 * - conditional add attribute to React component:
 * - Không thể auto play video with sound in chrome: (có thể là để tránh các quảng cáo tự động phát với tiếng ồn).
 * https://stackoverflow.com/questions/49930680/how-to-handle-uncaught-in-promise-domexception-play-failed-because-the-use
 * - <video> source update trong html nhưng video không thay đổi:
 * https://stackoverflow.com/questions/41303012/updating-source-url-on-html5-video-with-react
 * Trong trường hợp của mình là gắn key rồi nhưng bị trùng id giữa 2 list
 */