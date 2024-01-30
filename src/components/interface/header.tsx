import { ChevronDown, CircleUser } from "lucide-react";
import { UpdateAddressDrawer } from "./drawers/update-address";

import { getUserDetails } from "@/api/get-user-details";

import { useQuery } from "react-query";
import { Skeleton } from "../ui/skeleton";

export function Header() {
  const { data: userDetails, isFetching: isLoadingUserDetails } = useQuery({
    queryKey: ["get-user-details"],
    queryFn: getUserDetails,
    staleTime: 10000,
  });

  return (
    <header className="flex flex-col">
      <section className="bg-white pl-8 pr-5 pt-5 pb-5 h-auto flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-gray-400 text-xs pb-1">
            Endereço de entrega
          </span>
          {isLoadingUserDetails && <Skeleton className="w-[120px] h-[20px]" />}

          {!isLoadingUserDetails && (
            <UpdateAddressDrawer>
              <div className="flex items-center gap-1">
                <p className="text-gray-600 text-sm">
                  {!userDetails?.address && "Definir seu endereço..."}
                  {userDetails?.address && `${userDetails?.address}`}
                </p>
                <ChevronDown size={17} />
              </div>
            </UpdateAddressDrawer>
          )}
        </div>
        <div className="flex items-center">
          <CircleUser size={23} />
        </div>
      </section>
    </header>
  );
}