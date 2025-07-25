import { invoke } from "@tauri-apps/api/core";
import { PostRequest, PostSourceInfo, PostSummary } from "@/models/post";
import { InvokeResponse } from "@/models/response";
import { responseHandler } from "@/utils/response";

/**
 * Discover class for managing article posts.
 */
export class DiscoverService {
  /**
   * FETCH the list of post sources' info.
   * @returns {Promise<InvokeResponse<PostSourceInfo[]>>}
   */
  @responseHandler("resource")
  static async fetchPostSourcesInfo(): Promise<
    InvokeResponse<PostSourceInfo[]>
  > {
    return await invoke("fetch_post_sources_info");
  }

  /**
   * FETCH the list of posts' summaries.
   * @returns {Promise<InvokeResponse<PostSummary[]>>}
   */

  @responseHandler("resource")
  static async fetchPostSummaries(
    sources: PostRequest[]
  ): Promise<
    InvokeResponse<{ posts: PostSummary[]; cursors: Record<string, number> }>
  > {
    return await invoke("fetch_post_summaries", { requests: sources });
  }
}
