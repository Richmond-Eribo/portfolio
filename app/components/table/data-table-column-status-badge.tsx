import { cn } from "@/lib/utils";
import { RideStatus } from "@/types/ride-types";

const StatusBadge = ({ status }: { status: RideStatus | (string & {}) }) => {
  switch (status) {
    case RideStatus.completed:
      return <span className={cn("text-xs", `text-green-500`)}>{status}</span>;
    case RideStatus.cancelled:
      return <span className={cn("text-xs", `text-red-500`)}>{status}</span>;
    case RideStatus.booked:
      return <span className={cn("text-xs")}>{status}</span>;
    case RideStatus.arrived:
      return <span className={cn("text-xs")}>{status}</span>;
    case RideStatus.inProgress:
      return <span className={cn("text-xs", `text-orange-500`)}>{status}</span>;

    // This case is commented out as it is not used in the current implementation.
    // Uncomment if you want to handle the awaitingPayment status
    // case RideStatus.awaitingPayment:
    //   return <span className={cn("text-xs", `text-orange-500`)}>{status}</span>;
    default:
      return <span className={cn("text-xs")}>{status}</span>;
  }
};

export default StatusBadge;
