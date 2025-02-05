import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { fCurrency } from 'src/utils/format-number';
import { Label } from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

export type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  status: string;
  coverUrl: string;
  colors: string[];
  priceSale: number | null;
};

export function ProductItem({ product }: { product: ProductItemProps }) {
  const [open, setOpen] = useState(false); // เปิด/ปิด Dialog

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderStatus = (
    <Label
      variant="inverted"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.coverUrl}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <>
      <Card
        sx={{
          transform: 'scale(0.95)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1)',
            cursor: 'pointer',
          },
        }}
        onClick={handleClickOpen} // เปิด Dialog เมื่อคลิก
      >
        <Box sx={{ pt: '100%', position: 'relative' }}>
          {product.status && renderStatus}
          {renderImg}
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
            {product.name}
          </Link>

          <Box display="flex" alignItems="center" justifyContent="space-between">
            <ColorPreview colors={product.colors} />
            {renderPrice}
          </Box>
        </Stack>
      </Card>

      {/* Dialog Popup */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
          <Box
            component="img"
            alt={product.name}
            src={product.coverUrl}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Price: {fCurrency(product.price)}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {product.status === 'sale' ? 'On Sale!' : 'Regular Price'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
