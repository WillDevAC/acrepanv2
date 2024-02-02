import { getUserDetails } from "@/api/get-user-details";
import { ConfirmDisconnect } from "@/components/interface/drawer/confirm-disconnect";
import { Loading } from "@/components/ui/loading";
import { BadgePercent, LogOut, Package2 } from "lucide-react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export function MyProfilePage() {
  const { data: profileDetails, isFetching: isLoadingUserDetails } = useQuery({
    queryKey: ["get-user-details"],
    queryFn: getUserDetails,
    staleTime: 10000,
  });

  if (isLoadingUserDetails) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-3 flex items-center justify-between w-full">
        <section className="flex items-center justify-between">
          <div className="flex items-center  gap-3">
            <img
              src="/avatar.png"
              alt="Profile Picture"
              className="max-w-16 rounded-full"
            />
            <div className="flex flex-col gap-3">
              <p className="font-bold text-lg">{profileDetails?.name}</p>
              <span className="text-sm text-gray-600">
                {profileDetails?.currentPlan && (
                  <div className="flex items-center gap-3">
                    <div className="bg-red-400 p-3 text-red-50 flex items-center justify-center h-7 rounded-md">
                      Plano básico
                    </div>
                    <div className="bg-gray-200 p-3 text-gray-400 flex items-center justify-center h-7 rounded-md">
                      Até 23/05/2021
                    </div>
                  </div>
                )}
                {!profileDetails?.currentPlan &&
                  "Você não está em nenhum clube"}
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col p-5 gap-3">
        <Link
          className="flex gap-3 bg-white h-16 items-center border-b-2"
          to="/my-club"
        >
          <div className="flex items-center justify-center">
            <BadgePercent size={25} />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Meu clube</p>
            <span className="text-sm text-gray-600">
              Visualizar seu clube de beneficios.
            </span>
          </div>
        </Link>
        <Link
          className="flex gap-3 bg-white h-16 items-center border-b-2"
          to="/my-orders"
        >
          <div className="flex items-center justify-center">
            <Package2 size={25} />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Meus pedidos</p>
            <span className="text-sm text-gray-600">
              Visualizar seus pedidos.
            </span>
          </div>
        </Link>
        <ConfirmDisconnect>
            <article className="flex gap-3 bg-white h-16 items-center border-b-2">
              <div className="flex items-center justify-center">
                <LogOut size={25} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold w-full text-left">Desconectar</p>
                <span className="text-sm text-gray-600">
                  Clique para sair do sistema.
                </span>
              </div>
            </article>
        </ConfirmDisconnect>
      </section>
    </>
  );
}
