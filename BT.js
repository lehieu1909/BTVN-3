// Bai 1
// Một đơn vị sản xuất gồm có các cán bộ là công nhân, kỹ sư, nhân viên. 
// 	Mỗi cán bộ cần quản lý các dữ liệu: Họ tên, tuổi, giới tính(name, nữ, khác), địa chỉ.
// 	Cấp công nhân sẽ có thêm các thuộc tính riêng: Bậc (1 đến 10).
// 	Cấp kỹ sư có thuộc tính riêng: Nghành đào tạo.
// 	Các nhân viên có thuộc tính riêng: công việc.
// 	Yêu cầu 1: Xây dựng các lớp CongNhan, KySu, NhanVien kế thừa từ lớp CanBo.
// 	Yêu cầu 2: Xây dựng lớp QLCB(quản lý cán bộ) cài đặt các phương thức thực hiện các chức năng sau:
// 		Thêm mới cán bộ.
// 		Tìm kiếm theo họ tên.
// 		Hiện thị thông tin về danh sách các cán bộ.

// class CanBo {
//     constructor(name, age, gender, address) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.address = address;
//     }
// }

// toString(); {
//     console.log(`
//         name: ${this.name}
//         age: ${this.age}
//         gender: ${this.gender}
//         address: ${this.address}
//     `);
// }


// class CongNhan extends CanBo {
//     constructor(name, age, gender, address, step){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.address = address;
//         this.step = step;
//     }
// }

// toString(); {
//     console.log(`
//         name: ${this.name}
//         age: ${this.age}
//         gender: ${this.gender}
//         address: ${this.address}
//         step: ${this.step}
//     `);
// }

// class KySu extends CanBo {
//     constructor(name, age, gender, address, trainingindustry) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.address = address;
//         this.trainingindustry = trainingindustry;
//     }
// }

// toString(); {
//     console.log(`
//         name: ${this.name}
//         age: ${this.age}
//         gender: ${this.gender}
//         address: ${this.address}
//         trainingindustry: ${this.trainingindustry}
//     `);
// }

// class NhanVien extends CanBo {
//     constructor(name, age, gender, address, job) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.address = address;
//         this.job = job;
//     }
// }

// toString(); {
//     console.log(`
//         name: ${this.name}
//         age: ${this.age}
//         gender: ${this.gender}
//         address: ${this.address}
//         job: ${this.job}
//     `);
// }

// class ManagementDepartment {
//     constructor() {
//         this.stafflist = [];
//       }
// }

// AddNewStaff(CanBo);{
//     this.stafflist.push(CanBo);
//   }

// Bài 2: Xây dựng ứng dụng mô phỏng app giống ngân hàng (mở rộng của bài 3)
// Các chức năng: chuyển tiền, rút tiền, nạp tiền, vay vốn, đáo hạn (viết bằng class)
// Yêu cầu: xây dựng giao diện bằng html, css, chức năng sẽ viết bằng javascript, dữ liệu sẽ được lưu trong local storage


	