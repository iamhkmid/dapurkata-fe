import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { DASHBOARD, ONLINE_USERS } from "../../../graphql/dashboard/queries";
import {
  TGQLDashboardQuery,
  TGQLOnlineUsersQuery,
  TGQLOnlineUserSubs,
} from "../../../types/dashboard";
import IconsControl from "../../IconsControl";
import Cards from "./Cards";
import * as El from "./DashboardElement";
import Graph from "./Graph";
import SideSection from "./SideSection";

const Dashboard = () => {
  const { data, error, loading } = useQuery<TGQLDashboardQuery>(DASHBOARD, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  return (
    <El.Main>
      <Cards
        totalOrders={data?.dashboard?.totalOrders}
        totalIncome={data?.dashboard?.totalIncome}
        totalProducts={data?.dashboard?.totalProducts}
        totalUsers={data?.dashboard?.totalUsers}
        isLoading={loading}
      />
      <El.Section>
        <El.GraphWrapper>
          <Graph
            graph={{
              data: data?.dashboard?.graph?.data || [],
              labels: data?.dashboard?.graph?.labels || [],
            }}
          />
        </El.GraphWrapper>
        <SideSection
          isLoading={loading}
          lastOrders={data?.dashboard?.lastOrders || []}
        />
      </El.Section>
    </El.Main>
  );
};

export default Dashboard;
