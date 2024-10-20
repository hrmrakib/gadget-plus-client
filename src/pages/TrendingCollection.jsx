import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { Box } from "@mui/joy";
import { radioClasses } from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";
import { MdTableRows } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { FaEye, FaHeart, FaPlus, FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FilterDrawer from "../components/product/FilterDrawer";
import TrendingProductCard from "./TrendingProductCard";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../hooks/useAxiosPublic";
import FadeLoading from "../components/loading/FadeLoading";

const TrendingCollection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState(true);
  const [brandList, setBrandList] = useState([]);
  const location = useLocation();

  const stockSummary = useRef(null);
  const brandSummary = useRef(null);

  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  });
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [collectionType, setCollectionType] = useState("");

  const { category } = useParams();

  const {
    isPending,
    error,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["TrendingCollection"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/category", {
        params: { category, stock, price, brand, collectionType },
      });
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [stock, price, brand, collectionType]);

  useEffect(() => {
    if (products && products.length >= 5) {
      const brands = products.map((product) => product?.brand);
      setBrandList(brands);
    }
  }, [location, products]);

  if (isPending) return <FadeLoading />;

  if (error) return "An error has occurred: " + error.message;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // max price
  const maxPrice = Math.max(...products.map((pro) => pro.price));

  // total stock and out of stock product
  if (!stockSummary.current) {
    let inStock = 0;
    let outStock = 0;

    products.forEach((product) => {
      if (product.stock === 0) {
        outStock++;
      } else if (product.stock > 0) {
        inStock++;
      }
    });

    stockSummary.current = { inStock, outStock };
  }

  return (
    <div className='bg-[#080808]'>
      {/* Filter Drawer */}
      <FilterDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      <div className='flex flex-col justify-center pl-10 w-full h-80 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / {category}</h3>
        <h3 className='text-3xl font-semibold mt-2'>{category}</h3>
        <p className='mt-3 text-xl'>
          A {category} description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      {/*  */}
      <div className='grid grid-cols-4 gap-10 py-16 px-6'>
        {/* filter */}
        <div className='hidden md:block h-max col-span-1 border border-gray-500'>
          <div className='flex items-center gap-2 p-2.5 *:text-white text-lg lg:*:text-2xl border-b border-b-gray-500'>
            <HiOutlineAdjustmentsHorizontal />
            <h3>Filters</h3>
          </div>

          {/* availability */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Availability
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>Select</p>
              <button onClick={() => setStock(null)}>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup defaultValue='in' name='radio-buttons-group'>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      onClick={() => setStock(true)}
                      value='in'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='In Stack'
                      variant='solid'
                    />
                    <span className='text-white'>
                      {stockSummary?.current?.inStock}
                    </span>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      onClick={() => setStock(false)}
                      value='out'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='Out of Stock'
                      variant='solid'
                    />
                    <span className='text-white'>
                      {stockSummary?.current?.outStock}
                    </span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* price */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Price
            </h3>
            <div className='flex justify-between items-center gap-2 *:text-white my-2'>
              <p>The highest price is ${maxPrice}</p>
              <button onClick={() => setPrice({ minPrice: 0, maxPrice: 0 })}>
                Reset
              </button>
            </div>

            <div className='w-full flex items-center justify-between gap-3'>
              <div>
                <label className='text-white' htmlFor=''>
                  Min price:
                </label>
                <input
                  className='w-full bg-transparent outline-none border border-gray-500 rounded-sm text-white p-2 mt-2'
                  type='number'
                  placeholder='$5.00'
                  // value={price.min}
                  onChange={(e) =>
                    setPrice({ ...price, minPrice: Number(e.target.value) })
                  }
                />
              </div>
              <div>
                <label className='text-white' htmlFor=''>
                  Max price:
                </label>
                <input
                  className='w-full bg-transparent outline-none border border-gray-500 rounded-sm text-white p-2 mt-2'
                  type='number'
                  placeholder='$100.00'
                  // value={price.max}
                  onChange={(e) =>
                    setPrice({ ...price, maxPrice: Number(e.target.value) })
                  }
                />
              </div>
            </div>
          </div>

          {/* product type */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Product type
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>Select</p>
              <button>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup name='radio-buttons-group'>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='in'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label={category}
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* brand */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base text-center font-semibold uppercase p-2'>
              Brand
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>Select</p>
              <button onClick={() => setBrand("")}>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup name='radio-buttons-group'>
                  {brandList?.map((brand, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "5px",
                      }}
                    >
                      <Radio
                        onClick={() => setBrand(brand)}
                        value={brand}
                        sx={{
                          color: "white",
                          fontSize: { sm: "12px", md: "16px" },
                        }}
                        label={brand}
                        variant='solid'
                      />
                      <span className='text-white'>
                        {brand === brandList?.length}
                      </span>
                    </Box>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* color */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base text-center font-semibold uppercase p-2'>
              Color
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>Select</p>
              <button>Reset</button>
            </div>

            <Box>
              <RadioGroup
                aria-labelledby='product-color-attribute'
                defaultValue='warning'
                sx={{ gap: 2, flexWrap: "wrap", flexDirection: "row" }}
              >
                {["primary", "neutral", "danger", "success", "warning"].map(
                  (colore) => (
                    <Sheet
                      key={colore}
                      sx={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                        bgcolor: `${colore}.solidBg`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Radio
                        overlay
                        variant='solid'
                        // color={colore}
                        checkedIcon={<Done />}
                        value={colore}
                        slotProps={{
                          input: { "aria-label": colore },
                          radio: {
                            sx: {
                              display: "contents",
                              "--variant-borderWidth": "2px",
                            },
                          },
                        }}
                        sx={{
                          "--joy-focus-outlineOffset": "4px",
                          "--joy-palette-focusVisible": (theme) =>
                            theme.vars.palette[colore][500],
                          [`& .${radioClasses.action}.${radioClasses.focusVisible}`]:
                            {
                              outlineWidth: "2px",
                            },
                        }}
                      />
                    </Sheet>
                  )
                )}
              </RadioGroup>
            </Box>
          </div>

          {/* Collection Type */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Custom
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>Select</p>
              <button onClick={() => setCollectionType("")}>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup name='radio-buttons-group'>
                  {["new", "best"].map((type, i) => (
                    <Box
                      key={i}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Radio
                        onClick={() => setCollectionType(type)}
                        value={type}
                        sx={{
                          color: "white",
                          fontSize: { sm: "12px", md: "16px" },
                          marginTop: "8px",
                        }}
                        label={type}
                        variant='solid'
                      />
                      <span className='text-white'></span>
                    </Box>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        {/* collection */}
        <div className='col-span-4 md:col-span-3'>
          <div className='flex justify-between items-center py-2 lg:py-3 px-2 lg:px-2.5 md:border border-gray-500'>
            {/* filter for mobile */}
            <div
              onClick={toggleDrawer}
              className='flex md:hidden items-center gap-2 p-2.5 *:text-white text-lg lg:*:text-2xl border border-gray-500'
            >
              <HiOutlineAdjustmentsHorizontal />
            </div>

            {/* products header filter */}
            <div className='flex items-center gap-2 *:text-white'>
              <div
                onClick={() => setViewMode(true)}
                className={`${
                  viewMode && "bg-[#262626]"
                } border p-2 border-gray-600 rounded-sm cursor-pointer`}
              >
                <IoGridOutline />
              </div>
              <div
                onClick={() => setViewMode(false)}
                className={`${
                  !viewMode && "bg-[#262626]"
                } border p-2 border-gray-600 rounded-sm cursor-pointer`}
              >
                <MdTableRows />
              </div>

              <p className='hidden md:block'>
                <span className='font-semibold'>{products.length}</span>{" "}
                products viewed
              </p>
            </div>

            <div className='hidden md:block'>
              <span className='text-white '>Sort by:</span>
              <select
                className='bg-[#080808] border border-gray-600 ml-4 text-white outline-none p-2'
                id='dropdown'
              >
                <option value='option1'>Best Selling</option>
                <option value='option2'>Alphabetically, A - Z</option>
                <option value='option2'>Alphabetically, Z - A</option>
                <option value='option3'>Price, high to low</option>
                <option value='option3'>Price, low to high</option>
                <option value='option3'>Date, old to new</option>
                <option value='option3'>Date, new to old</option>
              </select>
            </div>
          </div>

          <div
            className={`mt-10 grid ${
              viewMode
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            } gap-10`}
          >
            {products?.map((product) => (
              <TrendingProductCard
                key={product?._id}
                product={product}
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
