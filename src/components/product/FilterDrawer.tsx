import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { Box } from "@mui/joy";
import { radioClasses } from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";
import React, { useEffect, useRef } from 'react'

interface FilterDrawerType {
    isOpen: boolean,
    onClose: ()=> void;
}

const FilterDrawer:React.FC<FilterDrawerType> = ({isOpen, onClose}) => {
    const drawerRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=> {
        const handleClickOutside = (event:MouseEvent) => {
            if(drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose()
            }}
            if(isOpen){
                document.addEventListener("mousedown", handleClickOutside)
            }else{
                document.addEventListener("mousedown", handleClickOutside)
            }
            return ()=> {
                document.addEventListener('mousedown', handleClickOutside)
            }
        
    },[isOpen, onClose])

  return (
    <div ref={drawerRef} className={`fixed top-0 left-0 h-full z-50 w-64 bg-zinc-800 shadow-lg transform ${isOpen ? "translate-x-0": "-translate-x-full"} transition-transform duration-300 ease-in-out overflow-y-scroll`}>
        {/* filter */}
        <div onClick={onClose} className="relative">
        <h3 className="absolute top-1 right-2 text-red-400">Close</h3>
        </div>
        <div className='border border-gray-500 '>
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
              <p>0 selected</p>
              <button>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup defaultValue='in' name='radio-buttons-group'>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='in'
                      sx={{ color: "white", fontSize:{sm:"12px", md:"16px"} }}
                      label='In Stack'
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='out'
                      sx={{ color: "white", fontSize: {sm: "12px", md:"16px"} }}
                      label='Out of Stock'
                      variant='solid'
                    />
                    <span className='text-white'>2</span>
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
              <p>The highest price is $35.00</p>
              <button>Reset</button>
            </div>

            <div className='w-full flex items-center justify-between gap-3'>
              <div>
                <label className='text-white' htmlFor=''>
                  Min price:
                </label>
                <input
                  className='w-full bg-transparent outline-none border border-gray-500 rounded-sm text-white p-2 mt-2'
                  type='number'
                  placeholder='$0.00'
                />
              </div>
              <div>
                <label className='text-white' htmlFor=''>
                  Min price:
                </label>
                <input
                  className='w-full bg-transparent outline-none border border-gray-500 rounded-sm text-white p-2 mt-2'
                  type='number'
                  placeholder='$100.00'
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
              <p>0 selected</p>
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
                      sx={{ color: "white", fontSize: {sm: "12px", md:"16px"} }}
                      label='Speaker'
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
              <p>0 selected</p>
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
                      sx={{ color: "white", fontSize: {sm: "12px", md:"16px"} }}
                      label='Brand name 1'
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='out'
                      sx={{ color: "white", fontSize: {sm: "12px", md:"16px"} }}
                      label='Brand name 2'
                      variant='solid'
                    />
                    <span className='text-white'>2</span>
                  </Box>
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
              <p>0 selected</p>
              <button>Reset</button>
            </div>

            <Box>
              <RadioGroup
                aria-labelledby='product-color-attribute'
                defaultValue='warning'
                sx={{ gap: 2, flexWrap: "wrap", flexDirection: "row" }}
              >
                {["primary", "neutral", "danger", "success", "warning"].map(
                  (colore:any) => (
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
                        color={colore} 
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
                          "--joy-palette-focusVisible": (theme:any) =>
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

          {/* custom level */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Custom
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>0 selected</p>
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
                      sx={{ color: "white", fontSize: {sm: "12px", md:"16px"} }}
                      label='New'
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FilterDrawer