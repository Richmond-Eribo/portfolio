export function ProfileCard() {
  return (
    <div className="flex  justify-start items-center md:items-start md:flex-row gap-6 mb-10">
      <img
        src="/images/richmond.webp"
        alt="Richmond Uyiosa Eribo"
        width={90}
        height={90}
        className="rounded-xl border-2 border-zinc-700"
      />
      <div className="self-end">
        <h1 className="text-xl lg:text-3xl font-bold text-white  md:text-left">
          Uyiosa Richmond Eribo
        </h1>
        <p className="text-gray-400  text-left">
          Frontend developer and Machine Learning Engineer <br /> working
          remotely.
        </p>
      </div>
    </div>
  )
}
