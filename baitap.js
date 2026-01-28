// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, tối ưu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15 Pro Max", 35000000, 5, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 0, "Electronics", false),
    new Product(3, "MacBook Pro M3", 45000000, 3, "Electronics", true),
    new Product(4, "AirPods Pro", 6000000, 10, "Accessories", true),
    new Product(5, "Apple Watch Ultra", 22000000, 7, "Accessories", true),
    new Product(6, "Magic Mouse", 2500000, 0, "Accessories", true),
    new Product(7, "iPad Air", 18000000, 4, "Electronics", true),
    new Product(8, "USB-C Cable", 500000, 15, "Accessories", true)
];

console.log("=== Câu 2: Danh sách sản phẩm ===");
console.log(products);
console.log("\n");

// Câu 3: Tạo mảng mới chỉ chứa name và price của mỗi sản phẩm
const nameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("=== Câu 3: Mảng chứa name và price ===");
console.log(nameAndPrice);
console.log("\n");

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(product => product.quantity > 0);

console.log("=== Câu 4: Sản phẩm còn hàng trong kho ===");
console.log(inStockProducts);
console.log("\n");

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log("=== Câu 5: Có ít nhất một sản phẩm giá trên 30.000.000 ===");
console.log(hasExpensiveProduct ? "Có" : "Không");
console.log("\n");

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const allAccessoriesAvailable = products
    .filter(product => product.category === "Accessories")
    .every(product => product.isAvailable === true);

console.log("=== Câu 6: Tất cả sản phẩm Accessories có đang được bán ===");
console.log(allAccessoriesAvailable ? "Có" : "Không");
console.log("\n");

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("=== Câu 7: Tổng giá trị kho hàng ===");
console.log(`${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`);
console.log("\n");

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("=== Câu 8: Duyệt mảng bằng for...of ===");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log("\n");

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("=== Câu 9: Dùng for...in để in thuộc tính và giá trị ===");
console.log("--- Sản phẩm đầu tiên ---");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}
console.log("\n");

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);

console.log("=== Câu 10: Danh sách tên sản phẩm đang bán và còn hàng ===");
console.log(availableAndInStockNames);
