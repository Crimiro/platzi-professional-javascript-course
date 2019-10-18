import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPlugin {
  private ads: Ads;
  private player: MediaPlayer;
  private media: HTMLMediaElement;
  private currentAd: Ad;
  private adsContainer: HTMLElement;
  constructor(){
    this.ads = Ads.getInstance();
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.adsContainer = document.createElement('div');
  }
  run(player: MediaPlayer) {
    this.player = player;
    this.player.container.appendChild(this.adsContainer);
    this.media = this.player.media;
    this.media.addEventListener('timeupdate', this.handleTimeUpdate);
  }
  private handleTimeUpdate() {
    const currentTime = Math.floor(this.media.currentTime);
    if(currentTime % 30 === 0) {
      this.renderAd();
    }
  }
  private renderAd() {
    if(this.currentAd) {
      return;
    }
    const ad = this.ads.getAd();
    this.currentAd = ad;
    this.adsContainer.innerHTML = `
      <div class='ads'>
        <a href="${this.currentAd.url}">
          <img src="${this.currentAd.imageUrl}"/>
          <div>
            <h5>${this.currentAd.title}</h5>
            <p>${this.currentAd.body}</p>
          </div>
        </a>
      </div>
    `;
    setTimeout(() => {
      this.currentAd = null;
      this.adsContainer.innerHTML = '';
    }, 10000);
  }
}
export default AdsPlugin;