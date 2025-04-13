export const baseURL = "https://api.laxo.one/";
// export const baseURL = "/api/";

export class ApiConfigs {
  public static signIn(login: string, pass: string) {
    return JSON.stringify([
      {
        class: "user_session",
        method: "auth",
        param: {
          login: login,
          pass: pass,
        },
        sid: null,
        domain: "laxocrm-test",
      },
    ]);
  }

  public static getRoles() {
    return JSON.stringify([
      {
        class: "role",
        method: "get_list",
        param: "",
        sid: "92bdf303e77ffcbdd8b26ff6cc6d35a1471b1d706692d6a707cf15b997dd7724",
      },
    ]);
  }

  public static getDeals(sid: string, filter: [] = []) {
    return JSON.stringify([
      {
        class: "order",
        method: "get_list",
        param: {
          funnel_id: "1",
          deleted: null,
          field_filter_ids: filter,
        },
        sid: sid,
        domain: "laxocrm-test",
      },
    ]);
  }

  public static getDealStatuses(sid: string) {
    return JSON.stringify([
      {
        class: "order_status",
        method: "get_list",
        param: {
          funnel_id: "1",
        },
        sid: sid,
        domain: "laxocrm-test",
      },
    ]);
  }

  public static patchDealStatus(sid: string, dealID: string, statusID: string) {
    return JSON.stringify([
      {
        class: "order",
        method: "set_status",
        param: {
          order_id: dealID,
          order_status_id: statusID,
        },
        sid: sid,
        domain: "laxocrm-test",
      },
    ]);
  }

  public static getUsers(sid: string) {
    return JSON.stringify([
      {
        class: "user",
        method: "get_list",
        param: {},
        sid: sid,
        domain: "laxocrm-test",
      },
    ]);
  }
}
