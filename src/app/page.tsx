export const runtime = 'edge';

export default function Home() {
  return (
    <main className="h-screen relative flex justify-center items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/background.jpg')] opacity-50"></div>
      <article className="p-10 bg-white drop-shadow-xl text-black">
        <header className="border-b-[3px]">
          <p className="text-5xl pb-3 font-semibold text-gray-400">Good bye.</p>
          <p className="text-3xl pb-5 font-semibold">Core Keeper 서버 서비스 종료 안내</p>
        </header>

        <div className="pt-5">
          <p>코어키퍼 서버를 이용해주시는 고객 여러분들께 감사 드리며,</p>
          <p>서버 종료와 관련해 안내 말씀 드립니다.</p>
        </div>

        <div className="flex items-center pt-5">
          <div className="rounded-full bg-orange-400 text-white font-semibold py-1 px-4 mr-5">
            서비스 종료일자: 2023년 6월 9일(금)
          </div>
          <div className="text-orange-400 font-semibold underline underline-offset-4">서버 서비스 전체 종료</div>
        </div>

        <p className="pt-2 text-xs">아이템은 알아서 가져가시기 바랍니다.</p>

        <div className="pt-3">
          <p>그동안 사랑해주신 여러분께 감사드리며,</p>
          <p>재미있고 유익한 서비스로 다시 찾아 뵙겠습니다.</p>
        </div>

        <p className="pt-5">다시 한 번 사랑해주셔서 감사드립니다.</p>

        <p className="pt-10 pb-5">서버주 드림</p>
      </article>
    </main>
  );
}
