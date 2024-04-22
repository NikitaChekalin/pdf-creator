import axios from "axios";

import { API_CONFIG } from "../api/api.config";
import { setupInterceptorsTo } from "../utils";

export const httpClient = setupInterceptorsTo(axios.create(API_CONFIG));

export const { get, post, put, delete: destroy, patch } = httpClient;
