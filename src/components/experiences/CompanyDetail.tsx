import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styled from "styled-components";
import { Company } from "./company.model";

const Logo = styled.img`
  height: 40px;
`;

const CompanyDetail = (props: Company) => {
  const {
    logo,
    name,
    position,
    description,
    accomplishments,
    location,
    duration,
  } = props;

  const isTabletOrSmaller = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Card variant="outlined" sx={{ p: { xs: 2, sm: 4 }, my: 2 }}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <Logo src={logo} alt={`${name} logo`} />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: { xs: "center", sm: "right" } }}
            >
              {position}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: { xs: "center", sm: "right" } }}
            >
              {location}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" textAlign="justify">
          {description}
        </Typography>
        <Typography variant="subtitle2">ACCOMPLISHMENTS</Typography>
        <ul>
          {accomplishments.map((accomplishment) => (
            <li key={accomplishment} style={{ textAlign: "justify" }}>
              <Typography variant="body2" textAlign="justify">
                {accomplishment}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      {isTabletOrSmaller && (
        <>
          <Divider />
          <CardActions>
            <Button variant="text" disabled>
              {duration}
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default CompanyDetail;
