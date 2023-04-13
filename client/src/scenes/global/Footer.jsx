import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "@/theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ShoppingAce
          </Typography>
          <div>
            ShoppingAce is a fashion site and one of the fastest-growing
            eCommerce sites in the world. ShoppingAce keeps things fresh with up
            to 100 new pieces on the site every single day. Plus, it's an
            inexpensive option with tons of styles under $80 and sale items
            sometimes go as low as just a couple of dollars!
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 Herzel Tel-Aviv, Israel, Zip Code 77777
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: Liordawit777@walla.com
          </Typography>
          <Typography mb="30px">(077) 777-2777</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
