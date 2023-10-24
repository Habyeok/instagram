import { Menu } from "../icons/Menu.jsx";
import { Heart } from "../icons/heart.jsx";
import { Comment } from "../icons/comment.jsx";
import { Share } from "../icons/share.jsx";
import { Bookmark } from "../icons/bookmark.jsx";

export const Feed = () => {
  return (
    <div className="w-[400px] bg-white text-black">
      <div id="header" className="flex items-center justify-between p-2">
        {/* profile */}
        <div className="flex items-center ">
          <div
            className="rounded-full w-10 h-10
           bg-[url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')]
           bg-contain mr-2"
          />
          <div>
            <div className="font-semibold">Habyeok</div>
            <div className="font-light">Daejeon</div>
          </div>
        </div>
        {/* 더보기 버튼 */}
        <div>
          <Menu />
        </div>
      </div>
      <div id="content" className="w-[400px] h-[400px]">
        <img
          className="object-cover	w-[400px] h-[400px]"
          src="https://cdn.britannica.com/38/196638-131-7BF02881/Santa-Claus.jpg"
          alt="img"
        />
      </div>
      <div id="footer" className="flex items-center justify-between p-2">
        <div className="flex items-center w-1/4 justify-between">
          <Heart />
          <Comment />
          <Share />
        </div>
        <div>
          <Bookmark />
        </div>
      </div>
      <div id="comments" className="p-2">
        {/* 누가 좋아요했는지 + 좋아요한 사람의 수 */}
        <div>
          Liked by <b>{40} others</b>
        </div>
        <div>
          <b>Habyeok</b> Christmas will coming soon🤗🤗!!
        </div>
        {/* 내가 작성한 컨텐츠의 글 */}
        {/* 댓글들 */}
      </div>
    </div>
  );
};