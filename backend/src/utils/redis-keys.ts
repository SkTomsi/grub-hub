export function getRedisKeyName(...args: string[]) {
  return `grubhub:${args.join(":")}`;
}


 
