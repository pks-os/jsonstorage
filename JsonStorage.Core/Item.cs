using System;
using Newtonsoft.Json;

namespace JsonStorage.Core
{
  public class Item
  {
    [JsonProperty(PropertyName = "id")]
    public string Id { get; set; }
    public string Value { get; set; }
    public DateTime Updated { get; set; }
    public DateTime Created { get; set; }
    public override string ToString()
    {
      return JsonConvert.SerializeObject(this);
    }
  }
}