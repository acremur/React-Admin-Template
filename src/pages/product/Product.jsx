import { Link } from "react-router-dom";

import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";

import "./product.css";
import { userData } from "../../dummyData"

const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={userData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://skalhuset.se/images/zoom/image-72177.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">id:</div>
                            <div className="productInfoValue">123</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales:</div>
                            <div className="productInfoValue">4651</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">active:</div>
                            <div className="productInfoValue">yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">In stock:</div>
                            <div className="productInfoValue">no</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholderApple Airpods />
                        <label>In stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://skalhuset.se/images/zoom/image-72177.jpg" alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{ display: 'none' }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product