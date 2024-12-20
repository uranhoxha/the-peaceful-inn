import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // NUMBER OF BOOKINGS
  const numBookings = bookings.length;

  //SALES
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // CHECK INS
  const checkIns = confirmedStays.length;

  //OCC RATE
  const occupation = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  ) / (numDays * cabinCount)

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
