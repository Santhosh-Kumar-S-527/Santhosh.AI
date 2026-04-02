import { ExternalLink, Trophy } from 'lucide-react';
import './CodingProfiles.css';

const profiles = [
  {
    id: 1,
    platform: 'LeetCode',
    username: 'Santhosh_Kumar__S',
    highlights: [
      'Solved **365+** problems',
      'Contest Rank: **1,525**',
      'Global Rank: **321,388**'
    ],
    link: 'https://leetcode.com/u/Santhosh_Kumar__S/',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEX///8HBwb4nxu0srEAAACxr676+vrQz860sbH5nAD7ngD4nhUDAwD8oQAAAAP4nADGxsb/pRy6uLf+8eH+4sG/v7/y8vLh4eH+6M6BgYH+9eptbW2mpqbr6+ufn5+4uLiZmZmUYBT+zZD++vT+s0n9v26MjIt6enr+yIT90Jo5OTmAfXr+4L38rDv+2rD8qCAsLCxJSUkeHh0SEhGVcEOfZhT9slOLWhP8ul6FUwD/uVKLYyz/37GKeWiHfnX+7df+wnphYGAcFQ5oZWIjIiJYVVH9vGfJwrvPwrIUAADmsmpgOADIgBbdjxxfPQ5MMAw0JhbOnFt6SQA2IAckFgZ7rxoyAAAIHUlEQVR4nO2dCXPaOBSAOQyJbYxjQoCQ0KRAstAF3GOXptkjdLeb7tG0e/T//5a1A0kJSE9y/GTJqr5OO9PMkHnf6Ok0fioUDIbUtE4Oj46OTndkxyGK1qG14nlFdixCOIjUikss60VPdjj4VO79bh1ftmUHhM1DwUjxeUt2SLhsCkaK38iOCZWKVdsQLNYsnfK0vNWCcSOeyg4Lj2OSYNQTZceFxvF2ii4VdRlraIJFXToiYZDRy5DcB5eGWqxrqCkaCb6SHRwGZbpg0TqSHR0CJ/QUjQz3ZIeXHuJEfy/4THZ46YEFrfzvg0HBonUsO77UMASfyI4vNYwUzb8gOIrWdBfUYd+0vaPXrAVBQUuLUZS+VNN/mvgKUjT/gidQiurQgge6r2S0F2SsZE5lx5caRgueyo4vNdov1b7uFNVeUIcUZQh+ty87wLTAgvWngR2Orgayo0wBPIrWvw9KpZJvT/td2YE+FsY0cSsY4drBIp/ZyhB8uhKMHX1vkcNc5ReMsb2Z7ICTsseXol/a0Z7nK1WTCsaOTp6akTlNbAvGqXqWm974OMFo6pjmZOJ4rGCUqcGV7OB5aCQaRTcVO7LDZwM/XYJa8BZHecUGePDLFCyVPMUTNU2K5qIvwoL112zBSNFTOFExBJVWBI/uuVL0TrEpW4UMlmCEmopcgm4Mh6KjoCJ7JeP6thdOp9PQsx2mpXrzIuPQ6WngeBfj5n53MBh095vjC48l6SumyBB84w1nDzcO3dkUdnTVakXGRP/mkhRtZ2iDjiopMlrwhx8pn5sFOVFkCP5E39juD21IUZWdBiNFfwY/fAYpumoswxkteM74+Eh5xZSCLEX5Ow2G4CHHr1gorYggGCn66iYqiiBLMZR4yMgYRdl98A6wL/pnAhVgQMFaAkGGoiMrT1OPouuMgET1F2IEWDCeTSQTBBXdqZSeyBDkHWS+ACiGMk77GYKPeWGZruhIePKG3oIxVEUJQ82OCEG6YpB5GwoSpE0a2Y80QlJ0CVEx8ylfWAvG9AmJmvVeX6ggaafhXqLEzU3vF/Rp4iFbil6240z1mdAWjHmo6HoThN+ZgF8Ft2DMaO2U0Q8yPt+vgIJY72E3Q9uPn2+4tn2R8YINHGVQUnRFZzSchtOLceZT/QtIMOlugsFAxoainFELSqNaoxtqUQuhcA4IalHfqQcUJNFCEGhCTQR7r2iGevTBQuEJVVCPFqQvSHURjJYzFMG3siPD4luyoQ4FZVaQt4WWJqW5ItqUJsx/pYA7yCNpkhyt4oJu+BvZkLNuVbW9c1DG5WCvjWpZfUks48jZhL2DShzUbvxn7Z/d8u79zwg/uf378H+rn0R/IyoNzDGgTfz6tsVX23gHufm+gFg3a4/UhDW+OpU7lV1RhhU8ReJAwzfZtyui/GJFtEQ9JBqecnyy2hAoGIE13BAPEblGUqFNiJinbwmGfFWNsWeJTRo4jVglHbJZLzkGmpZgwXIZp94pcetkveMwFJykaGMN2fAZR4K0BQuKNeQpEZ9vQ54s7YnO0jLSjEhaeFs8RY1bgqfDcgOp/jdptihylVPdE2x4gCNIPsPgWngL7ohoy7ZToiHXOeme0HUpVhMWGkTDVzzriWpDoCJWL6Qd0/Bt8XvCFCsNvALuLeKRPudZaUvQ2rRygHmPAvHpL++NItV2o1zBptzAPaghP3jifybT28Gmh3zcRjzGiBpRgyLxK6rkSgJcq++cQPmqkDZPnigzYlGL4pwrWpRv7NWsE9mhYUF5vBZtMdBWTpIhH3trpUjcQWmlSHvOrZEi+QnbUlGP4YbyHHipWJYdHQrAF9s0mTRoc6JGfRH6ErSFugrv9M8uFmMJr1YegYpYrTjoe7btu75jTzP+on60xXiXgWInvH9xxrWvs373sA1f44ChOPHW64HYmRdTBN/+xeiLs426Nf4UIepEHIOvXKRWnG299+SPUOJOAPF0GEux6W2/u5bxi08FcOJPq9j0CDV5/D5a6LycQ+Uf0yg2nW2/aEAdIsbOiaBWJKVobCjjbXXi92vSKlIEZXTEAv1MY6X4mHlxQuqDt8gpjMFI1OSKE3rxj+zfVr8FuS9OiIPMsh/KqYuB3BcnQAU+91qQARNGX0yiCAmW/Mw3GPegKQIpGiepQAUWSIr0UTRGWomhWxiKfF+NhAVtyTcKICiCKVpyxsIdGKRWJK9F1RFMrdgEK3yqIMhUfA9+eAb3QSUEmVP/78BHx2D9Uif7jSEFeAH3x5+0ZeX+BShoKyPIasW/AmKyDcYBVC9RKUGGYv2DE443N7HdcQAOogql6BIoUesfg5Ltzced7nKPMOh2xpce7KfIKLoOqBiH7PpOOJxfL67n09BhFmVXZRRdB0hU62YVt+u6PldlfbX64B10ResDU2kjRZUUBBSTGqrZgjHUr9zcsK1yIUhVrGsjSEnUeLbgR9U+eAdJsf4hgaGK08RDthO1/kmbFF2y2Yr1+g3PzTL5EYwVaw8EE+Soeks1MudrD8KTCOboGsv3f1v1JdbHG35BVS7s4GHwz7//ff78+dPrBH72PCc3WK7ox+cvAXyPzDo+eZesMldz9rVVaw14ka/LcpdMQk5H15kqeAkZF6xbq+78cjOEbjOYDR3wtKnkO5eTnL92czUKbMrdXK5thyPpN+Vg0OkPA2dZN3el5rq+7wXDfo4mQBbd5ngxn4aBFxOE0/li3MnX9MfFoNvdj+l2c3MBt8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBkMi/gfD6by9toJ9BAAAAABJRU5ErkJggg==',
    color: '#f59e0b'
  },
  {
    id: 2,
    platform: 'HackerRank',
    username: 'santhoshkumar146',
    highlights: [
      '**4★** C',
      '**4★** C++',
      '**3★** Python',
      '**3★** Java',
      '**2★** Problem Solving',
      '**1★** SQL'
    ],
    link: 'https://www.hackerrank.com/profile/santhoshkumar146',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NABwA62QNABoADBgEDhoNABg0OD8ImkgA72YFv1UnLDIAABC4ubvCw8Xv7/AAAAj29vaPkZOcnaAAABIKdjsHnkmztLW+v8ESGSLs8eGCAAAA/0lEQVR4nO3cOQ7CMBBAUcDsENaEnftfkwYapkEWCsR6r80U/nIVR3GvBwAAAAAAAAAAAAAAAAAAANCeYZ62ljdLm3d1nKrDUJq9no0yTVoKvDeDd4eQmI5haH96BZ6rfo7xpZ3E6SKsfbBNoXAXp9bPTZxcqnGOajXvSuEybw8VKlSoUKFChQoVKlSoUKFChQoVKlSoUOHvC68puJVV2OyD+HGj04WfUahQoUKFChUqVKhQoUKFCrteWP47fvnnNOWftSlUqFChQoUKFSpUqFChQoUKFSpUqFChwqzCP/8fv/w7Fcq/F+Mb/vxuEwAAAAAAAAAAAAAAAAAAAKDTHoDCYDr8qkOBAAAAAElFTkSuQmCC',
    color: '#10b981'
  },
  {
    id: 3,
    platform: 'CodeChef',
    username: 'san_u',
    highlights: [
      '**Diamond Badge**',
      'Global Rank: **166204**',
      'Country Rank: **159522**'
    ],
    link: 'https://www.codechef.com/users/san_u',
    logo: 'data:image/jpeg;base64,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',
    color: '#8b5cf6'
  },
  {
    id: 4,
    platform: 'Skillrack',
    username: 'Santhosh Kumar',
    highlights: [
      'Solved **1475+** problems',
      '**15** certificates',
      '**425+** Bronze medals'
    ],
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=514532&key=04b9aec3fde814e4c4aa20258c2311511eca934d',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAz1BMVEX///8zmMz+/v7///1DQ0MAY5v//f7a6fJkm72px9lBQUEAa6EAbKEAZJ8ZfLCx0d4NdKSfxNUnjMBsosIwhrEXfq3p9PcPd6phoMQAYJp2rcn3+/8AZaGxz+C30uRzqcg3NzczMzNJSUm+vr5nZ2fp6enIyMj09PQtLS3c3NxOTk6SkpKvr6/T09OEhITExMRdXV2AgIBxcXFYWFioqKipqamNjY2dnZ292eNpdHRDQEZENzgrTltohp2iy9pIW28YWnzY6uwgICAAWp1alL9AMZABAAAJb0lEQVR4nO2dC1cbNxOGVe16i2VskkIgLoauL+v1+oJvxE7zfU2btv//N1UzktZrMMSJ5pxaql5CIIbo6NkZja4jMxYUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFOS5uPxg+Kn+8k4cpL94SYhc+Txj3hKCZ07Ho96jr4ASKlulIu4ucv8IEynJNIxFLLoPfkYaMNq0G0vALQkcnRNwkgeeQDmTFACnjMRFiV2ApLgNWrDPaAiTj2eXFDr7GEWyOH5tW9z7y1+78af4f3Oqhx/Va41zSzXkR6ceQY2i63aj2flONUFv/i8+xZ/EbyyKEiLCzs1P9rqp3WONouvazdvPNvpdSAuKP84Y+gSBks+1dz/Yq1W7i24j8NJay6pmGwgy6W+NM5ZQBcH6eYuCsHkBXppIwnffXRWIojLIxN3tffOMcSIbnhQh2wJgumT3bWlD3whVRy8k4CBhYEPvCKUFhwAoennkJyFnhRxrSxMW8tv7moeELO8JM5TxjxBHZ4MULDjBf3hICB2hnC+JAXzvJ+F0JC0YC7Vu4SEhm2GU6Q5hjc03QkBSUUY1QuZfpAGmFUQZsTBriF4RItM2lR29MI3QK0LV6oYwGtU9oWdeyvEjFxhGl+WakUeEyitXSNjLfSVkj10hVEdhZrx+EbICGiF2FMxPQr4GHxVrrjpG/whx8Vf66Ky6dugLIVpsNoorgxn/CLkarYnx/uK2J4TYUTyUPlpl9ISQmcFMnG72Af0gVNvYykexr/eRUO0xSR+dPz1y4QshH3Z74KOrZ3tyLhGWffjTLQjo3sc4Hk2zZ9uEDhFWzsQ8OTaiJoUAOGUu25BzFUO4+aYCodZ/xeJAlRwi3N+n5nvBZIA+2i0ObPU6RphvH5bL1ephmpllJlR/1xW6TSiVPYxSIURXbPJdw8yxEcYid58QXBOO/4DB1gXThHK4JgQuzRw6buEYISAUuOkSCzFXwYfNuhhmBk/ij5OEykiZ6vtidQqIs0UZZg5t1jtGqObumdCIW3hBh5kHxg+eMXKNEKus/VIibhjLsV0Kkb9w2sJFQthcQrvhOQS9cvHhpUN1DhKilqlGHGA/gRN7rwh5HmupJokLpH4R6vhiMF/oKVwmhKGoUH2/1KjwkbAYlSZUPcULcpaQs6WxoEizV04nu0vIM9MS0+1r53/dJOQVI8pRar43W/SCkFU2mnB4+kqVnCVU4RRX8V+vktOE865eIfXShrjcJnD16fUDzs4SYnCRo+7RzF9CjDXqdJ6XhOpsyXhUeEuowCaryo69b4SoYvbVKjlNyA+vzHhEeFQ6oOOERygQfqPICW+sk+oC4Teq3giE30KYEBASn9WPyAhVPyAJGY9s9VESkmWZE9owQsLWrb3uaqQZljcUal/oTOfOmyt7tRp0NozqtfOGrWQJHUOoi7PIDG90zs+bf9MRXv9Io2v0Kn5LVNwX2ZhpEOGiDevAICULgmx1KIukPFkakRGxNHtxWR+0YRTdcoLykuQ2oQk1sDhE8cil5RI8LSNZicqj8tKIyq/0GjaPaJxL+j3VnQpEtzNIv8KvPFI25JYiG9IkdM/KXD9GU5x8RFQ3f3yp310QqH4NDZFHt5/vrHUhP+91w7ZX8rbdqdmqLf/cqUd+3ZY9dqNpoU6zUavJHp8olrKk3rl6b6vL91fNezOmedN6Z6lWq3VOebdJ5xeCUi6lDTXhDcFA/icclxK16HrtZ4gOdv19SSjnFm8oCMGGVNco1Wu/2BYlW+Clnluw6yYZIdnsqWbtpUh4FwgDYSD8bgXCIxQIA2EgtFQgPEKBMBAGQksdRciffeMXYSWb9+DPPSBkrD+QWswOIzpKyHeJu5BOB2mg6QupWG4S6nxWDZuNVI6EWfbdB3WMsGxwfJaZl9hjqq4ggWN3z5PrXSRkLO8P/pyXL64xy1U2xz8H/bz8HUcJ0TWLba8rRkODDEkEIp1AjrlIx9uM7R8RdYWQm7/y+SpN1QVjGgVv8h8VmEUvA066HHJmMly5Q4TK9bLHdbfMEFSpLryH13FBgt1Ipy0tptmuyTpCiHXls6VIdQodeim+itdVpVv5S/1RmZoVb2Z6IODIijBGl+ki3WWXjSc509cDwIujDHqNTawu7ADkFKMOg70+B2wI0WXTM7UXuvbaSNWcz+zDuvoUtoV6OmcnT5j3ZXSJDV/8UOifcnNflUrGQk8eqkCkGMUKok506jYstuNUlJXWUcQgqpQ6SIlkJrG1mIyRESNQuv6QRe9PmzAvbSJbGfYElfxHnsMPxUrfvWIGBNOBeSay+4hPnTBLywzrSWbG3MaG6qoAcwvJzo6sKHNe4zQ66VjaljYUPU24eMx2hlKEmDKYVu5PLYd1+v/AT0+8HUZ7oWOp+zlsgzJ4ymEMXPVQQuPXYtLbeXa6OvlIs1dhHWr0zJ59wPdeGlanFBh4y0ciu34nxjTS6SrhtLcpTIvDG1RjXnony7brHZ58Gthvnj4hzgcfhO4DBHjePNe5yXIUtzEhhg+XourRQ+3RJx1pNCGOureVAUt3DN3+Vk8rlMsW63LQJvvB7S4qnb4Ndb484/OVbFlq7D0a6qv/xJrri8jKkbeysY6vThCaBZlqmITwUuhphe4L1fUksp1OispM3wlCpcqABd5fcajeYKpyMZ60oRzCqDnFrs90ZH5YEnITdcBL9d2GvCSUo3IzL+Rmzc0hwh0pzPV7w920Qo1JWb/3mFV/j7lLiB17bqYV3Iy68zK6VOUgYdkgu0LAu9uUMfPpJZ3OEnLd/Q3H68V63Gflytrh3RkHCbWlKufKd1gHdi5cJNxxPl3BPyR3CV/fNfSC8JWbjjwhPFKBMBAGQksFwiMUCANhILRUIDxCDhAeNfp8WQ4QWoqfPiG3FTlhg46Q15v2OaQREIKzcklIkkNKaMOo3rz62V5XzQvI6+dwAw/k8dqKkDB5225ap3I3O+d/mb2ndq1pfRuM1N8Rp7rb5MtbGn1R92LcEhX3MYqIbhz4+irM8SWxQ8vF36mIrGIQCQnu/Yh4uS5uX96xK2BH8TGqoqqEtuXR1UoVx/HGFeseke0Wi21vNqFKxA8KCgoKCgoKCgoK+kb9B0bjZHOp0xTlbPFE9ZWJqQfynvDVBQFPVK5vPPvyb9eMSk8XcgKhe9pD4ZVXfSL8b0QavwnxRu3EZ8LDSN4RsgPbOH4I8aIoR+29ncm/XTMqKQvmP14820r9B2FVpj2lmJwfAAAAAElFTkSuQmCC',
    color: '#3b82f6'
  }
];

const renderHighlights = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="highlight-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const CodingProfiles = () => {
  return (
    <div className="profiles-page animate-fade-in container">
      <div className="profiles-header">
        <h1 className="page-title">
          <Trophy className="title-icon" size={40} /> Coding <span className="gradient-text">Profiles</span>
        </h1>
        <p className="page-subtitle highlight-line">
          “Actively solving problems across multiple coding platforms with strong rankings and achievements.”
        </p>
      </div>

      <div className="profiles-grid">
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card glass">
            <div className="profile-header-top">
              <div className="profile-logo-container" style={{ borderColor: profile.color, background: `${profile.color}20` }}>
                <img src={profile.logo} alt={`${profile.platform} logo`} className="profile-logo" />
              </div>
              <h3 className="profile-platform">{profile.platform}</h3>
            </div>
            <div className="profile-content">
              <p className="profile-username">@{profile.username}</p>
              <ul className="profile-highlights-list">
                {profile.highlights.map((highlight, idx) => (
                  <li key={idx} className="profile-highlight-item">
                    {renderHighlights(highlight)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="profile-footer">
              <a href={profile.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline full-width">
                <ExternalLink size={18} /> View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
