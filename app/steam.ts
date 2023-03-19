export const steamIdto64 = (steamid: string): string => {
  const serverId = steamid.slice(8, 9);
  const userId = parseInt(steamid.slice(10));
  const base = "7656119";
  const basecalc = 7960265728;
  const steamid64temp = basecalc + userId * 2 + parseInt(serverId, 10);
  const steamid64 = base + steamid64temp;
  return steamid64;
};

export const findSteamIds = (input: string): string[] => {
  const steamIDregex = /STEAM_(0|1):(0|1):\d{1,}/g;
  const matches = [];
  let tempMatches;
  while ((tempMatches = steamIDregex.exec(input)) !== null) {
    matches.push(tempMatches[0]);
  }
  return matches.map((id) => steamIdto64(id));
};
