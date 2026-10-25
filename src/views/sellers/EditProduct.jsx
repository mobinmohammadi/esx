import { useState, useRef, useEffect } from 'react';
import { Camera, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const allCategories = [
    { id: 1, title: 'mobile' },
    { id: 2, title: 'football' },
    { id: 3, title: 'watch' },
    { id: 4, title: 'sports' },
];

const EditProduct = () => {
    // ───── استیت فرم ─────
    const [form, setForm] = useState({
        name: '',
        brand: '',
        category: '',
        stock: '',
        price: '',
        discount: '',
        description: '',
    });

    // ───── استیت دسته‌بندی ─────
    const [cateShow, setCateShow] = useState(false);
    const [allCategory, setAllCategory] = useState(allCategories);
    const [searchValue, setSearchValue] = useState('');
    const dropdownRef = useRef(null);

    // ───── استیت عکس ─────
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    // ───── بستن dropdown با کلیک بیرون ─────
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setCateShow(false);
                setSearchValue('');
                setAllCategory(allCategories);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // ───── هندلر تغییر فیلدها ─────
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // ───── هندلر سرچ دسته‌بندی ─────
    const handleSearchCategory = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        if (value.trim() === '') {
            setAllCategory(allCategories);
        } else {
            setAllCategory(
                allCategories.filter((item) =>
                    item.title.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };

    // ───── انتخاب دسته‌بندی ─────
    const selectCategory = (title) => {
        setForm((prev) => ({ ...prev, category: title }));
        setCateShow(false);
        setSearchValue('');
        setAllCategory(allCategories);
    };

    // ───── آپلود عکس ─────
    const [images, setImages] = useState([])
    const [imageShow, setImageShow] = useState([])

    const handleImageChange = (e) => {
        const file = e.target.files;
        console.log(file);

        const length = file.length

        if (!file) return

        if (length > 0) {

            setImages([...images, ...file])
            let imgUrl = []

            for (let i = 0; i < length; i++) {
                imgUrl.push({ url: URL.createObjectURL(file[i]) })

            }
            setImageShow([...imageShow, ...imgUrl])

        }

    };
    console.log(imageShow);
    console.log(imageFile);

    const changeImage = (img, index) => {
        if (img) {
            let tempUrl = imageShow
            let tempImages = images


            tempImages[index] = img
            tempUrl[index] = { url: URL.createObjectURL(img) }
            setImageShow([...tempUrl])
            setImages([...tempImages])
        }

    }

    const removeImage = (i) => {
        console.log(i);

        const filterImage = images.filter((img, index) => index !== i)
        const filtreImageUrl = imageShow.filter((img, index) => index !== i)


        setImageShow(filtreImageUrl)
        setImages(filterImage)

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.price || !form.category) {
            alert('لطفاً نام محصول، قیمت و دسته‌بندی را پر کنید');
            return;
        }

        const payload = {
            ...form,
            image: imageFile,
        };

        console.log('payload =====>', payload);
        // TODO: ارسال به سرور
    };


    useEffect(() => {
        setForm({
            name: 'tshirt',
            brand: 'addidas',
            category: 'Mobile',
            stock: '20',
            price: '20,000',
            discount: '10',
            description: ';l;dgjkofnjicxnx mkscnsjhhdasuashbjhijhhadyf',
        })
    }, [])

    const inputClass =
        'w-full bg-transparent border border-white/30 rounded-md px-4 py-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white/70 transition-colors';
    const labelClass = 'block text-white/90 text-sm mb-1.5';

    return (
        <div className="rounded-md overflow-hidden">

            <div className="min-h-screen bg-[#6b72e0] p-4 md:p-8 font-sans">

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <h1 className="text-2xl font-semibold text-white">Edit Product</h1>
                        <Link
                            to="/seller/dashboard/all-product"
                            className="bg-[#8e9bff] hover:bg-[#7a88f2] text-white px-4 py-2 rounded-md text-sm transition-colors"
                        >
                            All Products
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className={labelClass}>
                                    Product Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Product Name"
                                    value={form.name}
                                    onChange={handleFormChange}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label htmlFor="brand" className={labelClass}>
                                    Brand Name
                                </label>
                                <input
                                    id="brand"
                                    name="brand"
                                    type="text"
                                    placeholder="Brand Name"
                                    value={form.brand}
                                    onChange={handleFormChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* dropdown دسته‌بندی */}
                            <div className="relative" ref={dropdownRef}>
                                <label htmlFor="category" className={labelClass}>
                                    Category
                                </label>
                                <input
                                    id="category"
                                    type="text"
                                    placeholder="Category Name"
                                    value={cateShow ? searchValue : form.category}
                                    onChange={handleSearchCategory}
                                    onFocus={() => setCateShow(true)}
                                    onClick={() => setCateShow(true)}
                                    className={inputClass}
                                    readOnly={!cateShow}
                                />

                                {cateShow && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-slate-500 rounded-md py-3 max-h-70 overflow-y-auto z-20 shadow-lg">
                                        <div className="px-3 mb-2">
                                            <input
                                                type="text"
                                                value={searchValue}
                                                onChange={handleSearchCategory}
                                                placeholder="Search ...."
                                                className="w-full border-b-2 border-b-green-600 pb-2 text-white outline-0 bg-transparent placeholder-white/60"
                                            />
                                        </div>

                                        <div className="*:py-2.5 *:px-3 *:hover:text-white *:hover:cursor-pointer *:hover:bg-sky-400 *:transition-all *:text-white/90">
                                            {allCategory.length > 0 ? (
                                                allCategory.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        onClick={() => selectCategory(item.title)}
                                                    >
                                                        {item.title}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-white/60 text-center py-2">
                                                    نتیجه‌ای یافت نشد
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="stock" className={labelClass}>
                                    Product Stock
                                </label>
                                <input
                                    id="stock"
                                    name="stock"
                                    type="number"
                                    placeholder="Product Stock"
                                    value={form.stock}
                                    onChange={handleFormChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="price" className={labelClass}>
                                    Price
                                </label>
                                <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    placeholder="price"
                                    value={form.price}
                                    onChange={handleFormChange}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label htmlFor="discount" className={labelClass}>
                                    Discount
                                </label>
                                <input
                                    id="discount"
                                    name="discount"
                                    type="number"
                                    placeholder="% Discount"
                                    value={form.discount}
                                    onChange={handleFormChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className={labelClass}>
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                placeholder="description"
                                value={form.description}
                                onChange={handleFormChange}
                                className={`${inputClass} resize-none`}
                            ></textarea>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2 mt-12">
                            {imageShow.map((img, i) => (
                                <>

                                    <label htmlFor={i} className="cursor-pointer relative w-40 h-40 rounded-lg overflow-hidden group">
                                        <img
                                            src={img.url}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(i)}
                                            className="cursor-pointer absolute top-2 right-2 bg-gray-900/60 hover:bg-gray-900/90 text-white rounded-full p-1 transition-colors"
                                            aria-label="Remove image"
                                        >
                                            <X size={16} />
                                        </button>
                                        <input onChange={(e) => changeImage(e.target.files[0], i)} type="file" className='hidden' id={i} />
                                    </label>
                                </>
                            ))}

                            <label
                                htmlFor="image-upload"
                                className="w-40 h-40 border-2 border-dashed border-white/40 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
                            >
                                <Camera className="text-white/70 mb-2" size={24} />
                                <span className="text-white/70 text-sm">select image</span>
                                <input
                                    id="image-upload"
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="bg-[#ff5745] cursor-pointer hover:bg-[#f04735] text-white px-6 py-2.5 rounded-md font-medium transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;