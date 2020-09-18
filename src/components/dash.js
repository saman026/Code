import React, { useState, useEffect } from "react";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { GETALLLEADS } from "../helper/index";
import { Link } from "react-router-dom";

function TableCard() {
  const [jobs, setjobs] = useState([]);
  const [vjobs, setvjobs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [errorF, seterrorF] = useState(false);
  const [update, setupdate] = useState(false);

  const loadAlljobs = () => {
    GETALLLEADS().then((data) => {
      console.log(data.result);
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          setjobs(data);
          setvjobs(data.result);
          // console.log(vjobs);
        }
    });
  };

  const [refresh, setrefresh] = useState(true);

  useEffect(() => {
    loadAlljobs();
  }, [refresh]);
  const productList = [
    {
      imgUrl: "/assets/images/products/headphone-2.jpg",
      name: "earphone",
      price: 100,
      available: 15,
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "earphone",
      price: 1500,
      available: 30,
    },
    {
      imgUrl: "/assets/images/products/iphone-2.jpg",
      name: "iPhone x",
      price: 1900,
      available: 35,
    },
    {
      imgUrl: "/assets/images/products/iphone-1.jpg",
      name: "iPhone x",
      price: 100,
      available: 0,
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "Head phone",
      price: 1190,
      available: 5,
    },
  ];

  return (
    <Card elevation={3} className='pt-5 mb-6'>
      <div className='card-title px-6 mb-3'>top selling products</div>
      <div className='overflow-auto'>
        <Table className='product-table'>
          <TableHead>
            <TableRow>
              <TableCell className='px-6' colSpan={4}>
                Name
              </TableCell>
              <TableCell className='px-0' colSpan={2}>
                Basic App ID
              </TableCell>
              <TableCell className='px-0' colSpan={2}>
                Bank Name
              </TableCell>
              <TableCell className='px-0' colSpan={2}>
                Loan Type
              </TableCell>
              <TableCell className='px-0' colSpan={2}>
                Amount
              </TableCell>
              <TableCell className='px-0' colSpan={2}>
                Status Date
              </TableCell>
              <TableCell className='px-0' colSpan={2}>
                Status
              </TableCell>
              <TableCell className='px-0' colSpan={2}>
                Stage
              </TableCell>
              <TableCell className='px-0' colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vjobs.map((product, i) => {
              return (
                <TableRow key={i}>
                  <TableCell
                    className='px-0 capitalize'
                    colSpan={4}
                    align='left'
                  >
                    <div className='flex items-center'>
                      <Link to={`/${product.id}`}>
                        <img
                          className='circular-image-small'
                          src={product.profilePicUrl}
                          style={{ width: "5rem", height: "2rem" }}
                          alt='user'
                        />
                      </Link>
                      <div className='m-0 ml-8'> {product.customerName}</div>
                      <div>{product.mobile}</div>
                    </div>
                  </TableCell>
                  <TableCell
                    className='px-0 capitalize'
                    align='left'
                    colSpan={2}
                  >
                    {product.basicAppID}
                    {/* $
                  {product. > 999
                    ? (product.price / 1000).toFixed(1) + "k"
                    : product.price} */}
                  </TableCell>

                  <TableCell className='px-0' align='left' colSpan={2}>
                    {product.bankName}
                  </TableCell>
                  <TableCell className='px-0' align='left' colSpan={2}>
                    {product.loanType}
                  </TableCell>

                  <TableCell className='px-0' align='left' colSpan={2}>
                    {product.amount}
                  </TableCell>
                  <TableCell className='px-0' align='left' colSpan={2}>
                    {product.eventDate}
                  </TableCell>
                  <TableCell className='px-0' align='left' colSpan={2}>
                    {product.eventDate}
                  </TableCell>
                  <TableCell className='px-0' align='left' colSpan={2}>
                    {product.applicationStage}
                  </TableCell>
                  <TableCell className='px-0' colSpan={1}>
                    <IconButton>
                      <Icon color='primary'>edit</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

export default TableCard;
