import * as yup from "yup";

const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
const nameRegExp =
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+(([',. -][a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s])?[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]]*)*$/;

const cmndRegExp = /^(\d{9}|\d{12})?$/;
const ListSchema = {
  phone: yup
    .string()
    // .matches(/([0])/, "Số điện thoại phải có số 0 đầu tiên")
    .min(10, "Số điện thoại không hợp lệ")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ")
    .max(10, "Số điện thoại không hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  name: yup
    .string()
    .required("Vui lòng nhập tên")
    .matches(nameRegExp, "Tên không hợp lệ")
    .matches(/\S/, "Tên không hợp lệ"),
  email: yup.string().lowercase("Email không chứa chữ Hoa").email("Email không hợp lệ").required("Vui lòng nhập email"),
  password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
  address: yup.string().required("Vui lòng nhập địa chỉ").matches(/\S/, "Địa chỉ không hợp lệ"),
  ward: yup.string().required("Vui lòng chọn phường/xã"),
  district: yup.string().required("Vui lòng chọn quận/huyện"),
  city: yup.string().required("Vui lòng chọn tỉnh/thành phố"),
  cmnd_id: yup
    .string()
    .required("Vui lòng nhập số chứng minh nhân dân")
    .matches(cmndRegExp, "Số chứng minh nhân dân không hợp lệ"),
  tax_code: yup.string().required("Vui lòng nhập mã số thuế"),
  name_bank: yup.string().required("Vui lòng nhập tên ngân hàng"),
  account_bank: yup
    .string()
    .required("Vui lòng nhập số tài khoản ngân hàng")
    .matches(/([0-9])/, "Số tài khoản ngân hàng phải là số"),
  name_account: yup.string().required("Vui lòng nhập tên chủ tài khoản"),
  bank_branch: yup.string().required("Vui lòng nhập chi nhánh ngân hàng"),
};

export { ListSchema };
