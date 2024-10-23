import images from "@/assets/images/images";
import Link from "next/link";
import Image from "next/image";

/**
 * [Footer]
 *
 * 토마토소개 매거진, 공모전, 대외활동, 교육/강연 Link
 * 공고등록/문의, 사업소개, 광고문의, 대행문의 Link
 * 고객문의, 공지사항, FAQ, 1:1문의 Link
 * 로고(/home으로 라우팅) 및 인스타그램 버튼
 *
 * @author seonga
 */

export default function Footer() {
  return (
    <>
      <div className="bg-beige-100 w-full h-[500px] flex items-center justify-center">
        <div className="flex flex-col justify-center w-[1264px] h-[408px] gap-[80px]">
          <div className="flex w-full justify-between h-[264px]">
            <div className="flex gap-[88px] w-full">
              <ul className="flex flex-col gap-[24px]">
                <li className="text-body-3">TOMATO.DLE</li>
                <li className="text-body-3-bold">
                  <Link href="/">토마토들 소개</Link>
                </li>
                <li className="text-body-3-bold">
                  <Link href="/magazine">매거진</Link>
                </li>
                <li className="text-body-3-bold">
                  <Link href="/contest">공모전</Link>
                </li>
                <li className="text-body-3-bold">
                  <Link href="/activity">대외활동</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-[24px]">
                <li className="text-body-3">공고등록/문의</li>
                <li className="text-body-3-bold">
                  <Link href="/">사업소개</Link>
                </li>
                <li className="text-body-3-bold">
                  <Link href="/">광고문의</Link>
                </li>
                <li className="text-body-3-bold">
                  <Link href="/">대행문의</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-[24px]">
                <li className="text-body-3">고객문의</li>
                <li className="text-body-3-bold">
                  <Link href="/">공지사항</Link>
                </li>
                <li className="text-body-3-bold">
                  <Link href="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[32px] items-end">
              <Image
                src={images.tomatoLogo}
                alt="tomato_logo"
                width={78}
                height={18}
              />
              <Image
                src={images.snsIcon}
                alt="sns_icon"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex flex-col text-body-3 gap-[24px]">
            <div className="flex gap-[40px]">
              <div>Copyright &copy; Tomato.DLE.All Rights Reserved.</div>
              <div>사업자등록번호 000-00000-00000</div>
              <div>주소: 구로구 가마산로 242 3층 306, 7호</div>
              <div>대표: 토마토</div>
            </div>
            <ul className="flex gap-[50px]">
              <li className="underline">이용약관</li>
              <li className="underline">개인정보처리방침</li>
              <li className="underline">책임한계와 법적고지</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
