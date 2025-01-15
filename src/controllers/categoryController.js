import CategoryModel from "../models/categoryModel.js";

export async function listCategory(req, res) {
    try {
        const categories = await CategoryModel.find(); // Lấy danh sách categories từ database
        res.render("pages/categories/list", { // Đảm bảo đường dẫn view đúng
            title: "Categories", // Thêm dấu phẩy ở đây
            categories: categories, // Truyền dữ liệu vào view
        });
    } catch (error) {
        console.error(error); // Log lỗi để kiểm tra
        res.send("Hiện tại không có sản phẩm nào"); // Thông báo lỗi tới người dùng
    }
}
