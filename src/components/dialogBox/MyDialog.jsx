import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import './dialog.css'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import React from "react";
import Button from "../Button/Button";

const MyDialog = ({
  isOpen = true,
  dialogToggler,
  handleFunction,
  productData,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        keepMounted
        onClose={dialogToggler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Are you sure you want to remove this item?"}
        </DialogTitle>
        <DialogContent>
          
            <div className="d-flex gap-3 border p-2 rounded text-dark">
                          <div className="" > <img src={productData?.product.images[0]} alt="" /> </div>
                          
                        <div className="">
                <div>
                  <h5 className="mb-3 text-dark fw-bold" style={{ fontSize:'18px' }}> {productData?.product.title} </h5>
                  <p className="mb-0" style={{ fontSize:"14px" }}>
                    <span>Color: </span>
                    {productData?.product.color}
                  </p>
                  <p className="mb-2" style={{ fontSize:"14px" }}> <span>Size: </span> {"UK 3"} </p>
                </div>
                <div>
                  <h5 className="text-danger last_price fw-bold mb-1 " style={{ fontSize: "15px" }} > ₹ {( productData?.product.price * productData?.quantity ).toLocaleString("en-US")} </h5>
                  {!!productData?.product.original_price && (
                    <h5 className="text-secondary fw-light" style={{ fontSize: '15px' }} > <del> ₹ {( productData?.product.original_price * productData?.quantity ).toLocaleString("en-US")} </del>
                    </h5>
                  )}
                </div>
                        </div>
            </div>
          
        </DialogContent>
        <DialogActions className="px-4">
          <Button bg={'black'} color={'white'} width="50%" cb={dialogToggler}>Cancel</Button>
          <Button bg={'black'} color={'white'} width="50%" cb={handleFunction}>Remove</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyDialog;
